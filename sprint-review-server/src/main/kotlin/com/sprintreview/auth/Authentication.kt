package com.sprintreview.auth

import io.ktor.auth.OAuthServerSettings
import io.ktor.http.HttpMethod

val loginProviders = listOf(
        OAuthServerSettings.OAuth2ServerSettings(
                name = "vk",
                authorizeUrl = "https://oauth.vk.com/authorize",
                accessTokenUrl = "https://oauth.vk.com/access_token",
                clientId = "***",
                clientSecret = "***"
        ),
        OAuthServerSettings.OAuth2ServerSettings(
                name = "github",
                authorizeUrl = "https://github.com/login/oauth/authorize",
                accessTokenUrl = "https://github.com/login/oauth/access_token",
                clientId = "***",
                clientSecret = "***"
        ),
        OAuthServerSettings.OAuth2ServerSettings(
                name = "google",
                authorizeUrl = "https://accounts.google.com/o/oauth2/auth",
                accessTokenUrl = "https://www.googleapis.com/oauth2/v3/token",
                requestMethod = HttpMethod.Post,

                clientId = System.getenv("GOOGLE_OAUTH_ID"),
                clientSecret = System.getenv("GOOGLE_OAUTH_SECRET"),
                defaultScopes = listOf("https://www.googleapis.com/auth/plus.login")
        ),
        OAuthServerSettings.OAuth2ServerSettings(
                name = "facebook",
                authorizeUrl = "https://graph.facebook.com/oauth/authorize",
                accessTokenUrl = "https://graph.facebook.com/oauth/access_token",
                requestMethod = HttpMethod.Post,

                clientId = "***",
                clientSecret = "***",
                defaultScopes = listOf("public_profile")
        )
).associateBy { it.name }

class Authentication {

}
