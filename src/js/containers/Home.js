// Dependencies
import React, { Component } from "react";
// Components
import PostPreview from "../components/PostPreview";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
// Services
import flickrAPI from "../services/flickrAPI";

import { getID } from "../utils/posts";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentWillMount() {
    flickrAPI("feeds/photos_public.gne?tags=potato&tagmode=all", "feed")
      .then(res => {
        this.setState({
          items: res.items,
          filteredItems: res.items,
          loaded: true
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          loaded: true
        });
      });
  }
  filterList(event) {
    const updatedList = this.state.items.filter(item => {
      return (
        item.tags.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredItems: updatedList });
  }
  render() {
    const { filteredItems, loaded, error } = this.state;
    return (
      <div className="row__inner">
        <SearchBar onChange={this.filterList.bind(this)} />
        {!loaded && <Spinner />}
        {error && <p>Oops! Something went wrong...</p>}
        <div className="posts">
          {loaded &&
            !error &&
            filteredItems.map((item, i) => (
              <PostPreview
                key={i}
                index={i}
                title={item.title}
                author={item.author}
                authorId={item.author_id}
                date={item.published}
                id={getID(item.link)}
                link={item.link}
                thumb={item.media.m}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Home;
