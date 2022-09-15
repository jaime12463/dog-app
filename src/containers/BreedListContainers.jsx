import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {setAllBreeds,setBreed} from '../actions'
//import * as actions from '../actions'
import {getAllBreeds} from '../reducers'
import BreedList from '../components/BreedList'

class BreedListContainers extends Component{

    componentDidMount(){
        //console.log("componentDidMount")
       // const {setAllBreeds} = this.props
        this.props.setAllBreeds()
       
    }

    render () {
        return (
            <div>
             <BreedList allBreeds={this.props.getAllBreeds} setSelectedBreed={this.props.setBreed}  />
            </div>
        )
    }
}
BreedListContainers.propType = {
    setAllBreeds: PropTypes.func.isRequired,
    getAllBreeds: PropTypes.array
}


const mapDispatchToProps= dispatch=> ({
    setAllBreeds :()=> dispatch(setAllBreeds()),
    setBreed : value => dispatch(setBreed(value))
  
  })
 const mapStateToProps = state=> ({
    getAllBreeds:getAllBreeds(state)
})

export default connect(mapStateToProps,mapDispatchToProps) (BreedListContainers)