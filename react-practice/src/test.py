curl --request POST \
  --url https://test.stytch.com/v1/otps/sms/send \
  -u 'project-test-796a8e30-ce25-49de-b43c-beb13651bd54:secret-test-TwbPbu1WlihS6CAaKOjeRzfUmfWcoxstCjE=' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone_number": "+18052174796",
    "expiration_minutes": 3
  }'
curl --request POST \
  --url https://test.stytch.com/v1/users/search \
  -u 'project-test-796a8e30-ce25-49de-b43c-beb13651bd54:secret-test-TwbPbu1WlihS6CAaKOjeRzfUmfWcoxstCjE=' \
  -H 'Content-Type: application/json' \
  -d '{
    "limit": 100,
    "query": {
      "operator": "AND",
      "operands": [
        {
          "filter_name": "created_at_greater_than",
          "filter_value": "2024-02-02T00:00:00Z"
        },
        {
          "filter_name": "created_at_less_than",
          "filter_value": "2024-03-11T23:59:59Z"
        },
        {
          "filter_name": "phone_verified",
          "filter_value": true
        },
        {
          "filter_name": "full_name_fuzzy",
          "filter_value": "Nadia"
        }
      ]
    }
  }'

curl --request GET \
    --url 'https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-adc07cc1-8206-4e75-a92e-1af40c0004f5&login_redirect_url={http://localhost:3000/authenticate}&signup_redirect_url={http://localhost:3000/authenticate}&custom_scopes=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly'