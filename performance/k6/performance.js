import http from 'k6/http';
import { check, group, sleep } from 'k6';

// Configurações do teste
export const options = {
  stages: [
    { duration: '20s', target: 20 }, 
    { duration: '100s', target: 20 }, 
  ],
  thresholds: {
    http_req_failed: ['rate<5'],           
    http_req_duration: ['p(95)<4000'],    
  },
};

const users = [
  { username: 'user1_ebac', password: 'psw!ebac@test' },
  { username: 'user2_ebac', password: 'psw!ebac@test' },
  { username: 'user3_ebac', password: 'psw!ebac@test' },
  { username: 'user4_ebac', password: 'psw!ebac@test' },
  { username: 'user5_ebac', password: 'psw!ebac@test' },
];

const BASE_URL = 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3';

const AUTH_HEADER = {
  Authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
};

function getRandomUser() {
  const index = Math.floor(Math.random() * users.length);
  return users[index];
}

export default function () {
  group('Cenário 1 - Listar cupons', function () {
    // Exemplo: faz GET em /coupons
    const res = http.get(`${BASE_URL}/coupons`, {
      headers: {
        'Content-Type': 'application/json',
        ...AUTH_HEADER,
      },
    });

    check(res, {
      'listar cupons status 200': (r) => r.status === 200,
      'existe body': (r) => r.body && r.body.length > 2,
    });
  });

  group('Cenário 2 - Buscar cupom por ID', function () {
    const couponId = 5157;
    const res = http.get(`${BASE_URL}/coupons/${couponId}`, {
      headers: {
        'Content-Type': 'application/json',
        ...AUTH_HEADER,
      },
    });

    check(res, {
      'buscar cupom status 200': (r) => r.status === 200,
      'body não está vazio': (r) => r.body && r.body.length > 2,
    });
  });

  sleep(1);
}
