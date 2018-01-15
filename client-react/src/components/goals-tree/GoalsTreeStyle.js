import { theme } from '../styles'

const connectionColor = '#779'
const connectionLine = '2px solid ' + connectionColor
const connectionWidth = '20px'
export const taskHeight = 40

export const goalsTreeStyles = {
  root: {
    fontFamily: theme.fontFamily,
    color: theme.colorText,
    height: 'calc(100% - 7px)',
    cursor: 'default',
    userSelect: 'none'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0px',
    left: '0px',
    padding: '10px 20px',
    minWidth: 'calc(100% - 40px)',
    minHeight: 'calc(100% - 20px)'
  },
  node: {
    display: 'flex',
    flex: 'auto'
  },
  connectionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: connectionWidth
  },
  connectionTop: {
    flex: 1,
    borderLeft: connectionLine
  },
  connectionBottom: {
    flex: 1,
    borderTop: connectionLine,
    borderLeft: connectionLine
  },
  connectionAfter: {
    borderBottom: connectionLine,
    width: connectionWidth,
    alignSelf: 'center',
    position: 'relative'
  },
  collapseExpandButton: {
    position: 'absolute',
    width: '18px',
    height: '18px',
    borderRadius: '10px',
    backgroundColor: '#274269',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '-10px',
    top: '-10px',
    cursor: 'pointer',
    fontSize: '10px',
    border: connectionLine,
    transition: '200ms'
  },
  collapseExpandButtonHover: {
    backgroundColor: '#40608F'
  },
  nodeContentContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0px'
  },
  childrenContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  tasksContainer: {
    display: 'flex',
    border: connectionLine,
    padding: '1px'
  },
  taskContainer: {
    width: '60px',
    height: taskHeight + 'px',
    display: 'flex',
    alignItems: 'stretch'
  },
  task: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colorC,
    margin: '1px',
    cursor: 'pointer'
  },
  taskHover: {
    backgroundColor: theme.colorD
  },
  addTask: {
    cursor: 'pointer',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(120,120,120,0.2)',
    margin: '1px'
  }
}
