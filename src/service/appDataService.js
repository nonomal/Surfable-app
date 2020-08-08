/*
  Copyright 2020 Sandoche ADITTANE & Farbod SARAF

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import localDataService from './localDataService'

var gplay = require('google-play-scraper').memoized();

const getAppData = async (appId) => {
  const googlePlayData = await gplay.app({ appId: appId });
  const localData = localDataService.getLocalAppData(appId) || {};
  const appData = Object.assign(googlePlayData, localData);

  return appData;
}

export default getAppData;