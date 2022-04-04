import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ResourceController } from "../resource.controller";
import { ResourceService } from "../resource.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authorS: "exampleAuthorS",
  createdAt: new Date(),
  id: "exampleId",
  relaseDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  authorS: "exampleAuthorS",
  createdAt: new Date(),
  id: "exampleId",
  relaseDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    authorS: "exampleAuthorS",
    createdAt: new Date(),
    id: "exampleId",
    relaseDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  authorS: "exampleAuthorS",
  createdAt: new Date(),
  id: "exampleId",
  relaseDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
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

describe("Resource", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ResourceService,
          useValue: service,
        },
      ],
      controllers: [ResourceController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /resources", async () => {
    await request(app.getHttpServer())
      .post("/resources")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        relaseDate: CREATE_RESULT.relaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /resources", async () => {
    await request(app.getHttpServer())
      .get("/resources")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          relaseDate: FIND_MANY_RESULT[0].relaseDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /resources/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/resources"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /resources/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/resources"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        relaseDate: FIND_ONE_RESULT.relaseDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
