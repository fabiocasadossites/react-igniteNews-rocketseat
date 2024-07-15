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
      {type: 'paragraph', content: 'Olá'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non similique neque nisi labore quisquam vitae incidunt dolorem perspiciatis autem esse sed repudiandae commodi, debitis recusandae quia, temporibus, ratione provident?'},
      {type: 'link', content: 'Lorem ipsum dolor'},
    ],
    publishedAt: new Date('2024-01-14 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/44373172?v=4',
      name: 'Fabio Amaral',
      role: 'CTO @ EA Bank'
    },
    content: [
      {type: 'paragraph', content: 'Olá'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non similique neque nisi labore quisquam vitae incidunt dolorem perspiciatis autem esse sed repudiandae commodi, debitis recusandae quia, temporibus, ratione provident?'},
      {type: 'link', content: 'Lorem ipsum dolor'},
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