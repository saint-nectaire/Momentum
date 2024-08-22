import axios from 'axios';
import { BACKEND_API } from '../config/api';

const exercisesUrl = `${BACKEND_API}/exercises`;

export const getExercises = async (queryParams = []) => {
    try {
        const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';
        const response = await axios.get(`${exercisesUrl}${queryString}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};


export const createExercise = async (exercise) => {
    try {
        const response = await axios.post(exercisesUrl, exercise);
        console.log('Exercise created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating exercise:', error);
        throw error;
    }
};

export const updateExercise = async (id, exercise) => {
    try {
        const response = await axios.put(`${exercisesUrl}/${id}`, exercise);
        console.log('Exercise created:', response);
        return response.data;
    } catch (error) {
        console.error('Error updating exercise:', error);
        throw error;
    }
};

export const deleteExercise = async (id) => {
    try {
        const response = await axios.delete(`${exercisesUrl}/${id}`);
        console.log('Exercise deleted');
        return response.data;
    } catch (error) {
        console.error('Error deleting exercise:', error);
        throw error;
    }
};
