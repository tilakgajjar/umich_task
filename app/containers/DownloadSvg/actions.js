/*
 *
 * DownloadSvg actions
 *
 */

import { DOWNLOAD_PLOT } from "./constants";

export function triggerDownload(plotId, download) {
  return {
    type: DOWNLOAD_PLOT,
    plotId,
    download,
  };
}
