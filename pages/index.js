import { getSession, signOut } from "next-auth/react"; 

const index =  ({session}) => {

  return (
    <div>
      { session && (
        <>
          <p>Hello {session.user.name}</p>
          <p>{session.user.email}</p>
          <img src={session.user.image}></img>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
    )
}


// Lo trae desde el backend (Backend dentro del frontend)
export const getServerSideProps = async (context) => {

  const session = await getSession(context)
  
  if(!session) return {
    redirect: {
      destination: '/login',
      permanent: false,
    }
  }

  return {
    props: {
      session: session
    }
  }
}

export default index