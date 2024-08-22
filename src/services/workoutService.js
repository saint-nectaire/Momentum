import axios from 'axios';
import { BACKEND_API } from '../config/api';

const workoutsUrl = `${BACKEND_API}/workoutplans`;

export const getWorkouts = async () => {
    try {
        const response = await axios.get(workoutsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching workouts:', error);
        throw error;
    }
};

export const createWorkout = async (workout) => {
    try {
        const response = await axios.post(workoutsUrl, workout);
        console.log('Workout created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating workout:', error);
        throw error;
    }
};

export const updateWorkout = async (id, workout) => {
    try {
        const response = await axios.put(`${workoutsUrl}/${id}`, workout);
        console.log('Workout updated:', response);
        return response.data;
    } catch (error) {
        console.error('Error updating workout:', error);
        throw error;
    }
};

export const deleteWorkout = async (id) => {
    try {
        const response = await axios.delete(`${workoutsUrl}/${id}`);
        console.log('Workout deleted');
        return response.data;
    } catch (error) {
        console.error('Error deleting workout:', error);
        throw error;
    }
};
