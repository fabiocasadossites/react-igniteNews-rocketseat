/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react';


export function Comment({contents, onDeleteComment}){

    // Deletar comentários
    function handleDeletecomment(){
        onDeleteComment(contents);
    }
    // Deletar comentários

    // Aplaudir comentários
    const [likeCount, setLikeCount] = useState(0);
    function handleLikeComment(){
        setLikeCount(likeCount+1)
    }
    // Aplaudir comentários

    return(
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/44373172?v=4"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.commentAndTime}>
                        <strong>Fabio Augusto</strong>
                        <time title='' dateTime="">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeletecomment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{contents}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>

        </div>
      </div>
    );
}

export default Comment