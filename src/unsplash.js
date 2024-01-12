import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH,
});

export { api };
