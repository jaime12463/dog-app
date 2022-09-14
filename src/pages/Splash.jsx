import React,{Component} from 'react'

import BreedPages from "./BreedPages"
import LoadingPages from "./LoadingPages"
import { connect } from 'react-redux';
import {getBreed} from '../reducers'
import {setAllBreeds} from '../actions'

class  Splash extends Component{

    componentDidMount(){
        //console.log("componentDidMount")
       // const {setAllBreeds} = this.props
        this.props.setAllBreeds()
       
    }

    render () {
        return ( 
            <div>   
            {
                this.props.breed =="Sin Datos" &&<LoadingPages />
            }   
            {
                this.props.breed !="Sin Datos" &&<BreedPages />
            }
        </div>
        )
    }



}
    
    
const mapDispatchToProps= dispatch=> ({
    setAllBreeds :()=> dispatch(setAllBreeds())
  })

const mapStateToProps = state=> ({
    breed: getBreed(state)
})

export default  connect(mapStateToProps,mapDispatchToProps) (Splash)