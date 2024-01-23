import { configureStore } from "@reduxjs/toolkit";
import trainer from './trainer.state'

export default configureStore({
  reducer:{
    trainer
  }
}) 

