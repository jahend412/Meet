"use strict";
import process from "process";

import { google } from "googleapis";
const CALENDAR = google.calendar("v3");
const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events.public.readonly",
];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = ["https://meet-sage-seven.vercel.app"];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

export const getAuthURL = async () => {
  /**
   *
   * Scopes array is passed to the `scope` option.
   *
   */
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

export const getAccessToken = async (event) => {
  // Decode authorization code extracted from the URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  })
    .then((results) => {
      // Respond with OAuth token
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      // Handle Error
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};

CALENDAR.events.list({
  calendarId: CALENDAR_ID,
  auth: oAuth2Client,
  timeMin: new Date().toISOString(),
  singleEvents: true,
  orderBy: "startTime",
});
