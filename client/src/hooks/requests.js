const API_URL = "http://localhost:8000";
// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
  // load planets and return as JSON
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  // TODO:Once API is ready
  // load launces, sort by flight no and return as JSON
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  // TODO:Once API is ready
  // submit given launch data to launch system
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  // TODO:Once API is ready
  // Delete launch with given id
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
