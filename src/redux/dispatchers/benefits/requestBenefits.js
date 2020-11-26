import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "./resourceTypes";
import { STRAPI_URL } from "../../../variables";

async function fetchBenefits(dispatch, start, limit, sort) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        { start, limit, sort }
      )
    );

    let url = "/benefits";
    let paramBefore = false;
    if (Number.isInteger(start) && start >= 0) {
      url += `?_start=${start}`;
      paramBefore = true;
    }

    if (Number.isInteger(limit) && limit >= 0) {
      if (paramBefore) {
        url += "&";
      } else {
        url += "?";
        paramBefore = true;
      }
      url += `_limit=${limit}`;
    }

    if (sort) {
      if (paramBefore) {
        url += "&";
      } else {
        url += "?";
        paramBefore = true;
      }
      url += `_sort=${sort}`;
    }

    response = await fetch(STRAPI_URL + url);
  } catch (e) {
    dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        e
      )
    );
  }
  // data recieved and response is okay
  let data;

  // get json if possible otherwise just get text
  if (response.headers.get("Content-Type") === "application/json") {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (response.ok) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
  } else if (response.status === 400) {
    dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.BAD_REQUEST,
        typeof data === "string" ? { message: data } : data
      )
    );
  } else if (response.status === 404) {
    dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NOT_FOUND,
        typeof data === "string" ? { message: data } : data
      )
    );
  } else {
    dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

export function getBenefits(start, limit, sort) {
  return (dispatch) => fetchBenefits(dispatch, start, limit, sort);
}
