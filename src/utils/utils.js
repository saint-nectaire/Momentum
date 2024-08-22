export const typeValueOptions = [
    { value: 'cardio', label: 'Cardio' },
    { value: 'strength', label: 'Strength' },
    { value: 'olympic_weightlifting', label: 'Olympic Weightlifting' },
    { value: 'plyometrics', label: 'Plyometrics' },
    { value: 'powerlifting', label: 'Powerlifting' },
    { value: 'stretching', label: 'Stretching' },
    { value: 'strongman', label: 'Strongman' }
]

export const muscleValueOptions = [
    { value: 'abdominals', label: 'Abdominals' },
    { value: 'abductors', label: 'Abductors' },
    { value: 'adductors', label: 'Adductors' },
    { value: 'biceps', label: 'Biceps' },
    { value: 'calves', label: 'Calves' },
    { value: 'chest', label: 'Chest' },
    { value: 'forearms', label: 'Forearms' },
    { value: 'glutes', label: 'Glutes' },
    { value: 'hamstrings', label: 'Hamstrings' },
    { value: 'lats', label: 'Lats' },
    { value: 'lower_back', label: 'Lower Back' },
    { value: 'middle_back', label: 'Middle Back' },
    { value: 'neck', label: 'Neck' },
    { value: 'quadriceps', label: 'Quadriceps' },
    { value: 'traps', label: 'Traps' },
    { value: 'triceps', label: 'Triceps' }
];

export const difficultyValueOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'expert', label: 'Expert' }
]

export const createQueryParams = (filters) => {
    return Object.entries(filters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
};
