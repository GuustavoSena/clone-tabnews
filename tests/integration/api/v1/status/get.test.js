test("GET to /api/v1/status should return 200 and return DB info", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  // updated_at
  expect(responseBody.updated_at).toBeDefined();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // database.version
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  // database.max_connections
  expect(responseBody.dependencies.database.max_connections).toBe(100);

  // database.current_connections
  expect(responseBody.dependencies.database.opened_connections).toBe(1);
});
