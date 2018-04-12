import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomePage from '@/components/contents/HomePage'
import Recommend from '@/components/contents/Recommend'
import Ranking from '@/components/contents/Ranking'
import SongSheet from '@/components/contents/SongSheet'
import Singer from '@/components/contents/Singer'
import Album from '@/components/contents/Album'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'homepage',
          name: 'homepage',
          component: HomePage,
          children: [
            {
              path: 'recommend',
              name: 'recommend',
              component: Recommend
            }, {
              path: 'ranking',
              name: 'ranking',
              component: Ranking
            }, {
              path: 'songsheet',
              name: 'songsheet',
              component: SongSheet
            }, {
              path: 'singer',
              name: 'singer',
              component: Singer
            }, {
              path: 'album',
              name: 'album',
              component: Album
            }, {
              path: '',
              component: Error
            }
          ]
        }, {
          path: '/',
          component: Error
        }
      ]
    }
  ]
})
