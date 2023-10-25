//----------------------------- DE LOCALHOST -----------------------------//
export const API_BASE_URL = 'http://localhost:8000/api/';
export const VISTA_RECURSO = 'http://127.0.0.1:8000/img/imgVistaRecursos/';
export const IMG_PROPIETARIO_CURSO = 'http://127.0.0.1:8000/img/imgUser/';

//----------------------------- DE HOSTINGER -----------------------------//
//export const API_BASE_URL = 'https://educacionespecialmx.site/idd_Educatio_back/public_html/api/';
//export const VISTA_RECURSO = 'https://educacionespecialmx.site/idd_Educatio_back/public_html/img/imgVistaRecursos/';
//export const IMG_PROPIETARIO_CURSO = 'https://educacionespecialmx.site/idd_Educatio_back/public_html/img/imgUser/';


export const REGISTRO_USUARIO_URL = `${API_BASE_URL}addUser`;
export const GET_RECURSOS_URL = `${API_BASE_URL}getRecursos`;
export const GET_DATOS_ID_CURSO = `${API_BASE_URL}getrecurosEditId/`;
export const GET_DATOS_PROPIETARIO_CURSO = `${API_BASE_URL}datosUsuarioCurso/`;
export const GET_IMAGEN_PORTADA_PROPIETARIO_CURSO = `${API_BASE_URL}imgByIdUser/`;

export const LOGIN_URL = `${API_BASE_URL}login`;


