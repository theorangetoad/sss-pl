import { theme } from '../../styles'

export const dimensions = {
  width: 150,
  height: 55,
  outerControlsWidth: 100,
  outerControlsHeight: 100
}

const innerButton = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  borderRadius: '2px',
  opacity: 0.4,
  transition: '400ms'
}

const outerButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '2px',
  transition: '300ms',
  cursor: 'pointer',
  zIndex: 3
}

export const goalsStyles = {
  root: {
    position: 'relative'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#A88116',
    width: dimensions.width + 'px',
    height: dimensions.height + 'px',
    border: '2px solid #779',
    cursor: 'pointer',
    transition: '200ms',
    position: 'relative',
    fontSize: '14px',
    color: '#fff'
  },
  contentHover: {
    border: '2px solid #ccc'
    // backgroundColor: '#30507F'
  },
  contentComplete: {
    opacity: '0.3'
  },
  contentPending: {
    backgroundColor: theme.colorB,
    color: '#888'
  },
  backgroundInEditMode: {
    position: 'fixed',
    left: '0px',
    top: '0px',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2
  },
  editButton: {
    ...innerButton,
    bottom: '0px',
    left: '0px'
  },
  labelRow: {
    position: 'absolute',
    left: '3px',
    top: '3px',
    fontSize: '9px',
    transition: '500ms',
    display: 'flex',
    alignItems: 'stretch',
    color: '#ccc'
  },
  label: {
    backgroundColor: '#8C600C',
    padding: '1px 3px 2px',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ccc',
    marginRight: '2px'
  },
  checkMark: {
    position: 'absolute',
    bottom: '0px',
    left: dimensions.width - 15 + 'px',
    fontSize: '20px',
    width: '0px',
    overflow: 'hidden',
    transition: '500ms'
  },
  checkMarkVisible: {
    width: '15px'
  },
  innerButtonHover: {
    opacity: 1
  },
  name: {
    flex: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  nameInput: {
    flex: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    textAlign: 'center',
    borderWidth: '0px',
    fontFamily: theme.fontFamily
  },
  outerButtonHover: {
    backgroundColor: theme.colorB
  },
  saveButton: {
    ...outerButton,
    position: 'absolute',
    left: '0px',
    height: '32px',
    width: '80px',
    fontSize: '80%',
    backgroundColor: theme.colorC
  },
  outerButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    width: dimensions.outerControlsWidth + 'px',
    height: '100px',
    fontSize: '80%',
  },
  outerButton: {
    ...outerButton,
    width: dimensions.outerControlsWidth + 'px',
    height: '25px',
    fontSize: '80%',
    backgroundColor: theme.colorD,
    margin: '2px'
  }
}
