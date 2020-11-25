import "cross-fetch/polyfill";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import {
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
  networkRequestFailedActionCreator,
  networkReceivedActionCreator,
  networkRequestActionCreator,
} from "../../actions/generics/network";
import { RESOURCE_TYPES } from "./resourceTypes";
import thunk from "redux-thunk";
import { STRAPI_URL } from "../../../variables";
import { getBenefits } from "./requestBenefits";

const middlewares = [thunk];

describe("requestBenefits", () => {
  let mockStore;
  let dateTimeSpy;
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
  });
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    dateTimeSpy = jest.spyOn(Date, "now");
    dateTimeSpy.mockImplementation((...args) => {
      return 1590801641073;
    });
  });
  afterEach(() => {
    fetchMock.restore();
    dateTimeSpy.mockRestore();
  });

  it("fetches benefits and dispatches the correct actions", async () => {
    fetchMock.getOnce(STRAPI_URL + "/benefits", {
      status: 200,
      body: [
        {
          id: 1,
          title_en: "Employment Insurance (EN)",
          title_fr: "Employment Insurance Benefit (FR)",
          title_es: null,
          created_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          updated_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          created_at: "2020-11-24T16:21:56.055Z",
          updated_at: "2020-11-24T16:21:56.090Z",
          benefit_key: "ei_benefit",
          benefit_description_en:
            "This benefit lays out what employment insurance looks like (EN)",
          benefit_description_fr:
            "This benefit lays out what employment insurance looks like (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
        },
        {
          id: 2,
          title_en: "Provincial Social Security (EN)",
          title_fr: "Provincial Social Security (FR)",
          title_es: null,
          created_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          updated_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          created_at: "2020-11-24T16:23:55.819Z",
          updated_at: "2020-11-24T16:23:55.836Z",
          benefit_key: "provincial_social_security",
          benefit_description_en:
            "Provincial Social Security benefit which hands out a check every month at retirement (en)",
          benefit_description_fr:
            "Provincial Social Security benefit which hands out a check every month at retirement (fr)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
        },
        {
          id: 3,
          title_en: "New Parents Benefit (EN)",
          title_fr: "New Parents Benefit (FR)",
          title_es: null,
          created_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          updated_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          created_at: "2020-11-24T16:26:52.646Z",
          updated_at: "2020-11-24T16:26:52.661Z",
          benefit_key: "new_parents_benefit",
          benefit_description_en:
            "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
          benefit_description_fr:
            "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
        },
      ],
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefits());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 1,
            title_en: "Employment Insurance (EN)",
            title_fr: "Employment Insurance Benefit (FR)",
            title_es: null,
            created_by: {
              id: 1,
              firstname: "admin",
              lastname: "user",
              username: null,
            },
            updated_by: {
              id: 1,
              firstname: "admin",
              lastname: "user",
              username: null,
            },
            created_at: "2020-11-24T16:21:56.055Z",
            updated_at: "2020-11-24T16:21:56.090Z",
            benefit_key: "ei_benefit",
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
          },
          {
            id: 2,
            title_en: "Provincial Social Security (EN)",
            title_fr: "Provincial Social Security (FR)",
            title_es: null,
            created_by: {
              id: 1,
              firstname: "admin",
              lastname: "user",
              username: null,
            },
            updated_by: {
              id: 1,
              firstname: "admin",
              lastname: "user",
              username: null,
            },
            created_at: "2020-11-24T16:23:55.819Z",
            updated_at: "2020-11-24T16:23:55.836Z",
            benefit_key: "provincial_social_security",
            benefit_description_en:
              "Provincial Social Security benefit which hands out a check every month at retirement (en)",
            benefit_description_fr:
              "Provincial Social Security benefit which hands out a check every month at retirement (fr)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
          },
          {
            id: 3,
            title_en: "New Parents Benefit (EN)",
            title_fr: "New Parents Benefit (FR)",
            title_es: null,
            created_by: {
              id: 1,
              firstname: "admin",
              lastname: "user",
              username: null,
            },
            updated_by: {
              id: 1,
              firstname: "admin",
              lastname: "user",
              username: null,
            },
            created_at: "2020-11-24T16:26:52.646Z",
            updated_at: "2020-11-24T16:26:52.661Z",
            benefit_key: "new_parents_benefit",
            benefit_description_en:
              "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
            benefit_description_fr:
              "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
          },
        ]
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
