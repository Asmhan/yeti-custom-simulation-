import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Image, Input, Menu, Button, Icon, Divider, Segment, Label, Grid } from 'semantic-ui-react'

class App extends Component {
  state = { activeItem:  'FRONT' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
        <div className="top-title">
          Free standard shipping on customized Ramblers.
        </div>
        <header>
          <div  className="container" style={{width: '100%'}}>
            <div style={{flex: 1.8}}>
              <a className="logo"></a>
            </div>
            <div style={{flex: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexFlow: 'row'}}>
              <div style={{height: '110px', color: '#08607f', paddingRight: '1em', paddingLeft: '1em', display: 'flex',alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px', lineHeight: '33px', textTransform: 'uppercase'}} className="nav-item">PRODUCTS</div>
              <div style={{height: '110px', color: '#08607f', paddingRight: '1em', paddingLeft: '1em', display: 'flex',alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px', lineHeight: '33px', textTransform: 'uppercase'}} className="nav-item">DESIGNS</div>
              <div style={{height: '110px', color: '#08607f', paddingRight: '1em', paddingLeft: '1em', display: 'flex',alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px', lineHeight: '33px', textTransform: 'uppercase'}} className="nav-item">ABOUT US</div>
              <div style={{height: '110px', color: '#08607f', paddingRight: '1em', paddingLeft: '1em', display: 'flex',alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px', lineHeight: '33px', textTransform: 'uppercase'}} className="nav-item">FAQ</div>
            </div>
            <div style={{flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexFlow: 'row'}}>
              <Button style={{lineHeight: '33px', fontWeight: 700, color: 'white', backgroundColor: '#064d66', paddingTop: '1px', paddingBottom: 0, whiteSpace: 'nowrap', borderRadius: 0, padding: '2px 0.5em 0'}}>START CUSTOMIZING</Button>
              <div>
                <Icon name="cart" size="large" style={{color: '#39444b'}}/>
                <div style={{color: '#39444b', fontSize: '.6rem'}}>CART</div>
              </div>
              <div>
                <Icon name="user" size="large" style={{color: '#39444b'}}/>
                <div style={{color: '#39444b', fontSize: '.6rem'}}>SIGN IN</div>
              </div>
            </div>
          </div>
        </header>
        <main style={{marginTop: '162px'}}>
          <div className="container" style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%'}}>
              <h2>CUSTOMIZE YOUR 30 OZ TUMBLER <span className="tag1">STAINLESS</span></h2>
            </div>
          </div>
          <div  className="container" style={{justifyContent: 'space-between', flexFlow: 'row', marginTop: 15, marginBottom: 15}}>
            <Button className="action-buttons"><Icon name='chevron circle left' style={{color: 'white'}}/>CHANGE PRODUCT</Button>
            <Button className="action-buttons" disabled>PROCEED TO APRROVAL<Icon name="chevron circle right" style={{color: 'white'}}/></Button>
          </div>
          <div className="container" style={{marginTop: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column'}}>
            <Menu attached="top" tabular style={{width: '100%',}}>
              <Menu.Item name='FRONT' style={{color:'#39444b', border: '1px solid #d6dce0',borderBottomColor: '#f3f5f6', backgroundColor: '#f3f5f6', borderRadius: '0px !important'}} active={activeItem === 'FRONT'} onClick={this.handleItemClick} />
              <Menu.Item name='BACK' style={{marginLeft: 10, color: '#08607f', fontWeight: 300, fontSize: '1.2em', background: '#fff', padding: '.3em 1em', border: '1px solid #d6dce0', borderBottomColor: '#f3f5f6'}} active={activeItem === 'BACK'} onClick={this.handleItemClick} />
              <Menu.Menu position='right'>
                <Menu.Item  style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'row', paddingLeft: 0, paddingRight: 0}}>
                    <label style={{float: 'left', margin: '.5em .5em 0 0'}}>Quantity</label>
                    <Input style={{maxWidth: '4em', border: '1px solid #d6dce0', borderRadius: 0}} value="1" type="number" min="1" step="1"/>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Segment attached='bottom' style={{border: '1px solid #d6dce0', backgroundColor: '#f3f5f6'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexFlow: 'row'}}>
                <Label pointing='below' style={{background: 'rgba(214,220,224,0.8)', color: '#39444b',padding: '.7em', fontSize: '1em',borderBottomColor: '#f3f5f6', fontWeight: 'bold'}}>DESIGNS</Label>
                <Label pointing='below' style={{background: 'transparent', color: '#39444b',padding: '.7em', fontSize: '1em',borderBottomColor: '#f3f5f6', fontWeight: 'bold'}} >MONOGRAMS</Label>
                <Label pointing='below' style={{background: 'transparent', color: '#39444b',padding: '.7em', fontSize: '1em',borderBottomColor: '#f3f5f6', fontWeight: 'bold'}}>TEXT</Label>
                <Label pointing='below' style={{background: 'transparent', color: '#39444b',padding: '.7em', fontSize: '1em',borderBottomColor: '#f3f5f6', fontWeight: 'bold'}}>LOGO</Label>
              </div>
              <div className="design-type">
                <div className="design-editor">
                  <div className="first-row" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexFlow: 'row'}}>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <span class="tags">
                          <span class="tag">Premium</span>
                        </span>
                        <Image src="https://yeticustomshop-designs.imgix.net/premium/collegiate/texas-primary-1/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">Collegiate</h3>
                    </div>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <span class="tags">
                          <span class="tag">Premium</span>
                        </span>
                        <Image src="https://yeticustomshop-designs.imgix.net/premium/greek/sigma-alpha-epsilon/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">Greek Society</h3>
                    </div>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <span class="tags">
                          <span class="tag">Premium</span>
                        </span>
                        <Image src="https://yeticustomshop-designs.imgix.net/premium/nascar/nascar/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">NASCAR</h3>
                    </div>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <span class="tags">
                          <span class="tag">Premium</span>
                        </span>
                        <Image src="https://yeticustomshop-designs.imgix.net/premium/national-park/yosemite/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">National Parks</h3>
                    </div>
                  </div>
                  <div className="second-row" style={{marginTop: 40,display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexFlow: 'row'}}>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <Image src="https://yeticustomshop-designs.imgix.net/standard/state/texas-take-it/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">State Pride</h3>
                    </div>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <Image src="https://yeticustomshop-designs.imgix.net/standard/hunt/mallard-duck/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">Browse Hunting</h3>
                    </div>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <Image src="https://yeticustomshop-designs.imgix.net/standard/fish/tarpon-jumping/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">Fishing</h3>
                    </div>
                    <div className="design-item" style={{width: 129, height: 129}}>
                      <div className="image-and-label" style={{width: 129, height: 129, backgroundColor: 'white', padding: 15, border: '1px solid #d6dce0'}}>
                        <Image src="https://yeticustomshop-designs.imgix.net/standard/coastal/anchor/flat.png"/>
                      </div>
                      <h3 class="prepared-design-name">Coastal</h3>
                    </div>
                  </div>
                  <div style={{marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Button style={{borderRadius: 0, background: 'rgba(214,220,224,0.85)', color: '#667984', fontWeight: 700, lineHeight: 2, whiteSpace: 'nowrap', padding: '2px 0.5em 0', fontStyle: 'normal'}}>CLEAR DESIGN <Icon name="remove"/></Button>
                  </div>
                </div>
                <div className="design-preview" style={{flex: 1}}>
                  <div className="supplementary">
                    No additional charge for standard, monogram, and text designs.
                  </div>
                  <img src="https://yeticustomshop-designs.imgix.net/standard/hunt/bobcat/rambler-tumbler-30oz/approval-front.png" style={{width: '118px', height: '248px'}}/>
                </div>
              </div>
            </Segment>
          </div>
          <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 20, marginBottom: 20}}>
            <Button className="action-buttons" disabled>PROCEED TO APRROVAL<Icon name="chevron circle right" style={{color: 'white'}}/></Button>
          </div>
        </main>
        <footer>
          <div class="container flex-container" style={{alignItems: 'flex-start'}}>
            <section style={{flex:3}}><a className="logo"></a></section>
            <section style={{flex:4, paddingLeft: '15%'}}>
              <div>
                <h4>Contact Information</h4>
                <ul>
                  <li><a href="mailto:hi@yeticustomshop.com">hi@yeticustomshop.com</a></li>
                  <li>Monday - Friday</li>
                  <li>8:00AM - 5:30PM CT</li>
                  <li><a href="tel:+15127771078">(512) 777-1078</a></li>
                </ul>
              </div>
            </section>
            <section style={{flex:3, paddingLeft: '15%'}}>
              <div>
                <nav>
                  <ul>
                    <li><a>PROCUCTS</a></li>
                    <li><a>DESIGNS</a></li>
                    <li><a>ABOUT US</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>CORPARATE QOUTE</a></li>
                    <li><a>GALLERY</a></li>
                    <li><a>CAREERS</a></li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
          <div className="container">
            <Divider className="divider" horizontal inverted><a href="http://yeti.com" target="_blank">Visit yeti.com</a></Divider>
          </div>
          <div className="copyright">
            <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <li className="copyright-item">
                © YETI Custom Shop
              </li>
              <li className="copyright-item">
                <a className="copyright-link">Terms & Conditions</a>
              </li>
              <li className="copyright-item">
                <a className="copyright-link">Return Policy</a>
              </li>
              <li className="copyright-item">
                <a className="copyright-link">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
