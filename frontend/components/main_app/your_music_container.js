import { connect } from 'react-redux';
import YourMusic from './your_music';
import {
  createPlaylist
} from '../../actions/playlist_actions';

const mapStateToProps = state => ({
  playlists: state.session.currentUser.playlists,
  subscriptions: state.session.currentUser.subscriptions,
  loading: state.loading,
  username: state.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
