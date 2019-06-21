const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

const { name, scores: {maths, science = 50} } = student;

it('maths should be 74', () => {
    expect(maths).toBe(74);
});

it('science should be 50', () => {
    expect(science).toBe(50);
});

it('name should be John Doe', () => {
    expect(name).toBe("John Doe");
});