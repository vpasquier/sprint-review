package com.sprintreview.test;

import assertk.assert
import assertk.assertions.isEqualTo
import assertk.assertions.isTrue
import com.sprintreview.constants.Constants.Companion.SMOKE_TEST
import com.sprintreview.constants.Endpoints.Companion.SMOKE
import com.sprintreview.tomcat
import io.ktor.application.Application
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.server.testing.handleRequest
import io.ktor.server.testing.withTestApplication
import org.junit.Test

class SmokeTestServer {

  @Test
  fun iCanHitServer() = withTestApplication(Application::tomcat) {
    with(handleRequest(HttpMethod.Get, SMOKE)) {
      assert(response.status()).isEqualTo(HttpStatusCode.OK)
      assert(response.content).isEqualTo(SMOKE_TEST)
    }
    with(handleRequest(HttpMethod.Get, "/")) {
      assert(response.status()).isEqualTo(HttpStatusCode.OK)
      assert(response.content!!.contains("html")).isTrue()
    }
  }
}
