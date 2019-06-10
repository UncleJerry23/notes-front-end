import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notes from '../components/Notes';
import { selectNotes } from '../selectors/noteSelectors';

class DisplayNotes extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Notes notes={this.props.notes}  />
      </>
    );
  }
}

const mapStateToProps = state => ({
  notes: selectNotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayNotes);
