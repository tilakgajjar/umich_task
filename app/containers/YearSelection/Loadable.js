/**
 *
 * Asynchronously loads the component for YearSelection
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
