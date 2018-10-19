import React, { Component } from 'react';
import './App.scss';
import { Header, Navbar, Section, Card, Footer } from './components';
//import * as image from './Images/features/index-sharing_300x120.png'

class App extends Component {
  render() {
    var navMenu =
      [
        { url: "#", title: "Blog" },
        { url: "#", title: "Login" },
        { url: "#", title: "Signup" }
      ];
    return (
      <div className="App">
        <Navbar
          title="ReactApp"
          menus={navMenu}
        />
        <Header
          headerTitle="a better video experience for the Web"
          headerDescription="ClipMine enables bloggers, creators and enthusiasts to tag content inside online videos and create a more engaging video experience"
        />

        <Section
          heading="Help your viewers discover what matters most to them!"
        >
          <div className="section-body section-help-viewers">
            <Card
              imageSource={require("./Images/video-emma_280x187.png")}
              heading="Meaningful sharing"
              description="It is a long established fact that a reader will be distracted by the readable content "
              type="vertical"
            />

            <Card
              imageSource={require("./Images/video-fallout_560x374.png")}
              heading="Meaningful sharing"
              description="It is a long established fact that a reader will be distracted by the readable content "
              type="vertical"
            />

            <Card
              imageSource={require("./Images/video-gatesjobs_560x374.png")}
              heading="Meaningful sharing"
              description="It is a long established fact that a reader will be distracted by the readable content "
              type="vertical"
            />
          </div>
        </Section>

        <Section
          heading="Features"
        >
          <div className="section-body section-features">
            <Card
              imageSource={require("./Images/features/index-sharing_300x120.png")}
              heading="Meaningful sharing"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
              type="vertical"
            />
            <Card
              imageSource={require("./Images/features/index-embeds_300x120.png")}
              heading="Interactive Embeds"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
              type="vertical"
            />
            <Card
              imageSource={require("./Images/features/index-tagging_300x120.png")}
              heading="Smart Tagging"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
              type="vertical"
            />
          </div>
        </Section>

        <Section
          heading="Benefits"
        >
          <Card
            heading="Personalized Experience"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking"
            imageSource={require("./Images/benefits/index-benefit-personal_83x83.png")}
            type="horizontal"
          />
          <Card
            heading="Improved Engagement"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when lookingIt is a long established fact that a reader will be"
            imageSource={require("./Images/benefits/index-benefit-engagement_83x83.png")}
            type="horizontal"
          />
          <Card
            heading="Actionable Analytics"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking It is a long established fact that a reader will be "
            imageSource={require("./Images/benefits/index-benefit-analytics_83x38.png")}
            type="horizontal"
          />
        </Section>

        <Section
          heading="ClipMine Video Collections"
        >
          <div className="section-body section-video-collection">
            <Card
              imageSource={require('./Images/collections/collection-startup_460x184.png')}
              type="vertical"
            />
            <Card
              imageSource={require('./Images/collections/collection-ml_461x184.png')}
              type="vertical"
            />
          </div>
        </Section>

        <Footer
          menus={navMenu}
          copyrightText="2016 ClipMine, Inc."
        />
      </div>
    );
  }
}

export default App;
