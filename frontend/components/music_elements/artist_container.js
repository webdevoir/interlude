import { connect } from 'react-redux';
import Artist from './artist';
import { fetchArtist } from '../../actions/music_actions';

const mapStateToProps = state => {
  return ({
    artist: state.music.artist,
    loading: state.music.artist.id ? state.loading : true
  });
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: artistId => dispatch(fetchArtist(artistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
