/**
 *
 * Asynchronously loads the component for BarPlot
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
