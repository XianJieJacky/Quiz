import imgLinux from './assets/linux.png'
import imgPHP from './assets/php.png'
import imgDevOps from './assets/devops.png'
import imgDocker from './assets/docker.png'
import imgKubernetes from './assets/kubernetes.png'
import imgHistory from './assets/history.png'

export const API_URL = 'https://quizapi.io/api/v1/questions'
export const API_KEY = process.env.REACT_APP_QUIZIO_API_KEY
export const QUIZ_CATEGORY = [
  {
    name: 'Linux',
    image: imgLinux
  },
  {
    name: 'DevOps',
    image: imgDevOps
  },
  {
    name: 'PHP',
    image: imgPHP
  },
  {
    name: 'Docker',
    image: imgDocker
  },
  {
    name: 'Kubernetes',
    image: imgKubernetes
  },
]

export const HISTORY_ICON = imgHistory