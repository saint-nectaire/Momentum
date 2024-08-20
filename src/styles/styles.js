export const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flex: '1 1 100vh',
    justifyContent: 'center',
    alignItems: 'center',

  };

  export const footerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    bgcolor: 'background.default',
    p: 2,
    zIndex: theme => theme.zIndex.drawer + 1,
  };

  export const paperStyles = {
    display: 'flex',
    width: '70em',
    justifyContent: 'space-between',
    padding: '5px',
    margin: '2px',
    alignItems: 'center'
  }

  export const exercisePaperStyles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '5px',
    marginTop: '2px',
    alignItems: 'center'
  }

  export const closeButton = {
    position: 'absolute',
    right: 8,
    top: 8
}

  export const logoStyles = {
    height: 70,
    width: 'auto',
  }
  
  export const toolBarStyles = { 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  export const buttonContainer = {
    display: 'flex',
    marginBottom: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  }

  export const workoutDetailTitleCard = {
    display: 'flex',
    marginBottom: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto'
  }

