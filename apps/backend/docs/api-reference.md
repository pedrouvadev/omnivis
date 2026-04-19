# OMNIVIS Backend API Reference

## Base URL
```
http://localhost:3000/api/v1
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Health Check
```
GET /health
```
Response: `{ "status": "ok", "message": "OMNIVIS Backend API" }`

### Auth

#### Register
```
POST /auth/register
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "password123",
  "telefone": "11999999999",
  "localizacao": "-23.5505,-46.6333"
}
```

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "senha": "password123"
}
```

### Voluntários

#### List All
```
GET /voluntarios
```

#### Get by ID
```
GET /voluntarios/:id
```

#### Create
```
POST /voluntarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "telefone": "11999999999",
  "localizacao": "-23.5505,-46.6333"
}
```

#### Update
```
PUT /voluntarios/:id
Content-Type: application/json

{
  "nome": "João Silva Jr.",
  "telefone": "11988888888"
}
```

#### Delete
```
DELETE /voluntarios/:id
```

### Disponibilidades

#### Add Disponibilidade
```
POST /voluntarios/:id/disponibilidades
Content-Type: application/json

{
  "tipo": "Saude",
  "ativo": "Medico"
}
```

#### Remove Disponibilidade
```
DELETE /voluntarios/:id/disponibilidades/:tipo
```

#### List Disponibilidades
```
GET /voluntarios/:id/disponibilidades
```

### Abrigos

#### List All
```
GET /abrigos
```

#### Create
```
POST /abrigos
Content-Type: application/json

{
  "nome": "Abrigo Central",
  "localizacao": "-23.5505,-46.6333",
  "capacidade": 500,
  "ocupacao": 200,
  "necessidades": ["Água", "Roupas"]
}
```

#### Update Ocupação
```
PUT /abrigos/:id/ocupacao
Content-Type: application/json

{
  "ocupacao": 250
}
```

## Error Responses

All errors follow this format:
```json
{
  "error": "Error message description"
}
```

HTTP Status Codes:
- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
