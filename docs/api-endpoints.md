# API Endpoints

## HTML API

### Root

- `GET /` - loads React Web App

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:postId`
- `DELETE /api/posts`

### Likes

- `POST /api/posts/:postId/likes`
- `DELETE /api/posts/:postId/likes`

### Follow

- `POST /api/follow/:followeeId`
- `DELETE /api/follow/:followeeId`
