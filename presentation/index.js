// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    traefik: require("../assets/figures/traefik.logo.svg"),
    huh: require("../assets/figures/huh.gif"),
    microservices: require("../assets/figures/microservices.png"),
    docker: require("../assets/figures/docker-logo.png"),
    rkt: require("../assets/figures/rkt.png"),
    mesos: require("../assets/figures/mesos-logo.png"),
    swarm: require("../assets/figures/swarm.png"),
    k8s: require("../assets/figures/kubernetes-logo.png"),
    rancher: require("../assets/figures/rancher-logo.png"),
    consul: require("../assets/figures/consul-logo.png"),
    etcd: require("../assets/figures/etcd-logo.png"),
    reverse: require("../assets/figures/traditionnalArchitecture.png"),
    reverseConfig: require("../assets/figures/traditionnalArchitecture.config.png"),
    stop: require("../assets/figures/stop.gif"),
    traefikArchitecture: require("../assets/figures/traefikArchitecture.png"),
    priere: require("../assets/figures/priere.jpg"),
    greatBut: require("../assets/figures/greatBut.gif"),
    letsEncrypt: require("../assets/figures/letsencrypt-logo.svg"),
    dockerImage: require("../assets/figures/docker.image.png"),
    reblochon: require("../assets/figures/reblochon.png"),
    mantl: require("../assets/figures/mantl-logo.png"),
    mantlBack: require("../assets/figures/mantl.back.svg"),
    cisco: require("../assets/figures/cisco-logo.png"),
    zenika: require("../assets/figures/zenika.logo.png"),
    containous: require("../assets/figures/containous.logo.png"),
    arrow: require("../assets/figures/arrow.png"),
    traefikSticker: require("../assets/figures/traefik.sticker.png"),
    camembert: require("../assets/figures/camembert.png"),
    morbier: require("../assets/figures/morbier.png")
};

preloader(images);

const theme = createTheme({
  primary: "#37ABC8",
  white: "#e2e2e2"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={200}>

          <Slide bgColor="white">
            <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit height="200" />
            <Heading size={1}  textColor="primary">
              Make
            </Heading>
            <Heading size={3} textColor="primary" >
              Load-balancing
            </Heading>
            <Heading size={1} textColor="primary">
              great again !
            </Heading>
            <Text margin="40" >Emile Vauge — CNCF Paris 2017</Text>
          </Slide>

           <Slide>
            <Heading textColor="white" >
              $ whoami
            </Heading>
            <List fit textColor="white">
              <Appear><ListItem>French 🇫🇷 DevOps & Developer</ListItem></Appear>
              <Appear><ListItem>I ❤ Docker 🐳, I ❤ Go and 🐧</ListItem></Appear>
              <Appear><ListItem>Worked @ Thales, Airbus, Lyra, Zenika</ListItem></Appear>
              <Appear><ListItem>Creator and maintainer of <Link href="https://traefik.io">traefik.io</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading size={2} caps textColor="white">
              But why another
            </Heading>
              <Image src={images.huh.replace("/", "")} margin="20px auto 20px"  height="300"/>
            <Heading size={2} caps textColor="white">
              reverse-proxy?
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={3} fit textColor="black">
              Microservices
            </Heading>
              <Image src={images.microservices.replace("/", "")} margin="20px auto 40px" fit/>
          </Slide>

          <Slide  bgColor="white">
            <Heading size={3}  fit textColor="primary" >
              Containers
            </Heading>
              <Image src={images.docker.replace("/", "")} margin="40px auto 10px" height="150" />
              <Image src={images.rkt.replace("/", "")} margin="10px auto 10px" height="130" />
          </Slide>

          <Slide  bgColor="white">
            <Heading size={3} fit textColor="black" >
              Orchestration
            </Heading>
            <Image src={images.swarm.replace("/", "")}  height="200" padding="10"/>
            <Image src={images.mesos.replace("/", "")}   height="200"padding="10"/>
            <Image src={images.k8s.replace("/", "")}     height="200" padding="10"/>
            <Image src={images.rancher.replace("/", "")}    width="200" padding="10"/>
          </Slide>

          <Slide  bgColor="white">
            <Heading size={3}  fit textColor="primary" >
              Service Discovery
            </Heading>
              <Image src={images.consul.replace("/", "")} height="250" padding="20"/>
              <Image src={images.etcd.replace("/", "")} height="250" padding="20"/>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps  textColor="black">
              And now
            </Heading>
            <Heading size={1} fit caps>
              Let's add a
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              reverse proxy
            </Heading>
          </Slide>

          <Slide bgColor="white" >
              <Image src={images.reverse.replace("/", "")} height="550"/>
          </Slide>

          <Slide bgColor="white" >
              <Image src={images.reverseConfig.replace("/", "")} height="550"/>
          </Slide>

          <Slide bgColor="black">
              <Image src={images.stop.replace("/", "")} margin="20px auto 20px"  height="400"/>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} textColor="primary" >
              Here comes
            </Heading>
              <Image src={images.traefik.replace("/", "")} height="400" padding="20"/>
          </Slide>

          <Slide bgColor="white">
              <Image src={images.traefikArchitecture.replace("/", "")} height="550"/>
          </Slide>

           <Slide>
            <Heading textColor="white" >
              Features
            </Heading>
            <List fit textColor="white">
              <Appear><ListItem>Single binary (Did I say I ❤ Go ?)</ListItem></Appear>
              <Appear><ListItem>Backends: Docker, Swarm, Kubernetes, Mesos / Marathon, Consul, Etcd, Zookeeper...</ListItem></Appear>
              <Appear><ListItem>Hot reloading</ListItem></Appear>
              <Appear><ListItem>Load-balancing: WRR, DRR</ListItem></Appear>
              <Appear><ListItem>Circuit breakers</ListItem></Appear>
              <Appear><ListItem>Websockets</ListItem></Appear>
              <Appear><ListItem>HTTP2</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1} textColor="white" >
              Demo
            </Heading>
            <Image  fit src={images.priere.replace("/", "")} height="500" padding="20"/>
          </Slide>

          <Slide>
            <Heading size={1}>
              Great!
            </Heading>
            <Image  fit src={images.greatBut.replace("/", "")} height="400" padding="20"/>
            <Text textColor="white" fit>But wait, how do you manage SSL certs?</Text>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} caps fit textColor="primary" >
              Free, Automated
            </Heading>
            <Image src={images.letsEncrypt.replace("/", "")} width="800"/>
            <Heading size={1} caps fit textColor="primary" >
            Certificate Authority
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1}>
              Official image
            </Heading>
            <Text textColor="white">
              $ docker pull traefik
            </Text>
            <Image  fit src={images.dockerImage.replace("/", "")} height="400" padding="20"/>
          </Slide>

          <Slide bgImage={images.mantlBack.replace("/", "")}>
            <Heading size={1}  caps>
              Part of
            </Heading>
            <Image  fit src={images.mantl.replace("/", "")} height="200" padding="20"/>
            <Image  fit src={images.cisco.replace("/", "")} height="200" padding="20"/>
          </Slide>

          <Slide>
            <Heading size={1} caps  >
              Traefik v1.1
            </Heading>
            <Image src={images.camembert.replace("/", "")} height="300"/>
            <Heading size={1} caps  >
            camembert
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} fit caps textColor="primary">
              Cluster mode,
              Swarm mode
            </Heading>
            <Heading size={2} fit caps>
              Generic Mesos,
              Basic Auth
            </Heading>
            <Heading size={1} fit caps textColor="primary">
              Session affinity
            </Heading>
          </Slide>

          <Slide>
            <Heading size={3} fit>
              What's next?
            </Heading>
            <Heading size={1} fit caps>
              Prometheus support
            </Heading>
            <Heading size={2} fit caps>
              Eureka support,
              Healthchecks
            </Heading>
            <Heading size={1} fit caps>
              Traefik bug
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} caps textColor="primary"  >
              Traefik v1.2
            </Heading>
            <Image src={images.morbier.replace("/", "")} height="400"/>
            <Heading size={1} caps textColor="primary"  >
            morbier
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps>
              6100+ ★
            </Heading>
            <Heading size={2} fit caps>
              2.5M+ downloads
            </Heading>
            <Heading size={1} fit caps >
              430 LGTM, 97 👷
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.zenika.replace("/", "")} width="800"/>
            <Image src={images.arrow.replace("/", "")} height="120" />
            <Image src={images.containous.replace("/", "")} width="800" />
          </Slide>
          
          <Slide>
            <Heading size={1} fit caps>
              We are
            </Heading>
            <Heading size={1} fit caps>
              hiring !
            </Heading>
            <Heading size={2} fit italic>
              $ docker run containous/jobs
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} caps textColor="primary" textSize="170">
              I have
            </Heading>
            <Image src={images.traefik.replace("/", "")} height="200"/>
            <Heading size={1} caps textColor="primary">
              Stickers!
            </Heading>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
            <Quote>It's 2016, and I really wish I had a Load Balancer, that works across cloud providers, with a real API for managing dynamic configuration.</Quote>
            <Cite>Kelsey Hightower (@kelseyhightower) <Link href="https://twitter.com/kelseyhightower/status/739860449949155329">June 6, 2016</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
            <Quote>It's 2016, and I may have found a Load Balancer with a real API and support for dynamic configuration! https://traefik.io</Quote>
            <Cite>Kelsey Hightower (@kelseyhightower) <Link href="https://twitter.com/kelseyhightower/status/739866697075548161">June 6, 2016</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide >
            <Heading size={1} caps  >
              Thank you!
            </Heading>
            <Text >
            <Link href="https://traefik.io">traefik.io</Link>
            </Text>
            <Text  >
            <Link href="https://twitter.com/traefikproxy">@traefikproxy</Link>
            </Text>
            <Text >
            <Link href="https://github.com/emilevauge">@emilevauge</Link>
            </Text>
            <Text >
            <Link href="https://emilevauge.github.io/cncfParis2017">emilevauge.github.io/cncfParis2017</Link>
            </Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
