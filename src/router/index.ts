import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/condutor',
    name: 'condutor',
    component: () => import('../views/condutor/Listagem.vue')
  },
  {
    path: '/condutor/new',
    name: 'condutor_cadastro',
    component: () => import('../views/condutor/Novo.vue')
  },
  {
    path: '/condutor/:condutor_id',
    name: 'condutor_editar',
    component: () => import('../views/condutor/Editar.vue')
  },
  {
    path: '/veiculo',
    name: 'veiculo',
    component: () => import('../views/veiculo/Listagem.vue')
  },
  {
    path: '/veiculo/new',
    name: 'veiculo_cadastro',
    component: () => import('../views/veiculo/Novo.vue')
  },
  {
    path: '/veiculo/:veiculo_id',
    name: 'veiculo_editar',
    component: () => import('../views/veiculo/Editar.vue')
  },
  {
    path: '/marca',
    name: 'marca',
    component: () => import('../views/marca/Listagem.vue')
  },
  {
    path: '/marca/new',
    name: 'marca_cadastro',
    component: () => import('../views/marca/Novo.vue')
  },
  {
    path: '/marca/:marca_id',
    name: 'marca_editar',
    component: () => import('../views/marca/Editar.vue')
  },
  {
    path: '/modelo',
    name: 'modelo',
    component: () => import('../views/modelo/Listagem.vue')
  },
  {
    path: '/modelo/new',
    name: 'modelo_cadastro',
    component: () => import('../views/modelo/Novo.vue')
  },
  {
    path: '/modelo/:modelo_id',
    name: 'modelo_editar',
    component: () => import('../views/modelo/Editar.vue')
  },
  {
    path: '/movimentacao',
    name: 'movimentacao',
    component: () => import('../views/movimentacao/Listagem.vue')
  },
  {
    path: '/movimentacao/new',
    name: 'movimentacao_cadastro',
    component: () => import('../views/movimentacao/Novo.vue')
  },
  {
    path: '/movimentacao/:movimentacao_id',
    name: 'movimentacao_editar',
    component: () => import('../views/movimentacao/Editar.vue')
  },
  {
    path: '/:nomepagina(.*)*',
    name: 'paginanaoencontrada',
    component: () => import('../views/Pagina404.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router