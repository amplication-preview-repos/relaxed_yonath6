import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MatchmakingRequestController } from "../matchmakingRequest.controller";
import { MatchmakingRequestService } from "../matchmakingRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  gameLookup: "exampleGameLookup",
  id: "exampleId",
  requestCreatedAt: new Date(),
  requestStatus: "exampleRequestStatus",
  status: "exampleStatus",
  updatedAt: new Date(),
  userLookup: "exampleUserLookup",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  gameLookup: "exampleGameLookup",
  id: "exampleId",
  requestCreatedAt: new Date(),
  requestStatus: "exampleRequestStatus",
  status: "exampleStatus",
  updatedAt: new Date(),
  userLookup: "exampleUserLookup",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    gameLookup: "exampleGameLookup",
    id: "exampleId",
    requestCreatedAt: new Date(),
    requestStatus: "exampleRequestStatus",
    status: "exampleStatus",
    updatedAt: new Date(),
    userLookup: "exampleUserLookup",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  gameLookup: "exampleGameLookup",
  id: "exampleId",
  requestCreatedAt: new Date(),
  requestStatus: "exampleRequestStatus",
  status: "exampleStatus",
  updatedAt: new Date(),
  userLookup: "exampleUserLookup",
};

const service = {
  createMatchmakingRequest() {
    return CREATE_RESULT;
  },
  matchmakingRequests: () => FIND_MANY_RESULT,
  matchmakingRequest: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("MatchmakingRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MatchmakingRequestService,
          useValue: service,
        },
      ],
      controllers: [MatchmakingRequestController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /matchmakingRequests", async () => {
    await request(app.getHttpServer())
      .post("/matchmakingRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        requestCreatedAt: CREATE_RESULT.requestCreatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /matchmakingRequests", async () => {
    await request(app.getHttpServer())
      .get("/matchmakingRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          requestCreatedAt: FIND_MANY_RESULT[0].requestCreatedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /matchmakingRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/matchmakingRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /matchmakingRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/matchmakingRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        requestCreatedAt: FIND_ONE_RESULT.requestCreatedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /matchmakingRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/matchmakingRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        requestCreatedAt: CREATE_RESULT.requestCreatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/matchmakingRequests")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
