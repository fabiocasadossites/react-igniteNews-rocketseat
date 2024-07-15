import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/44373172?v=4',
      name: 'Fabio Augusto',
      role: 'CTO @ Casa dos sites'
    },
    content: [
      {type: 'paragraph', content: '👋 Olá'},
      {type: 'paragraph', content: 'Bem vindo(a) ao meu projeto do curso de React da rocketseat, espero que goste!!!'},
      {type: 'link', content: 'http://www.fabioaugusto.dev'},
    ],
    publishedAt: new Date('2024-07-14 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/44373172?v=4',
      name: 'Fabio Amaral',
      role: 'CTO @ EA Bank'
    },
    content: [
      {type: 'paragraph', content: '👋 Olá'},
      {type: 'paragraph', content: 'Bem vindo(a) ao meu projeto do curso de React da rocketseat, espero que goste!!!'},
      {type: 'link', content: 'http://www.fabioaugusto.dev'},
    ],
    publishedAt: new Date('2024-07-14 20:30:00')
  },
];

function App() {
  return (
    <div>
     <Header/>

     <div className='wrapper'>

      <Sidebar/>
      
      <main>

      {
        posts.map(post =>{
        return (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
        )  
        })
      }
      </main>

     </div>
    </div>
  )
}

export default App