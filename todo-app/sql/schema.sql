DROP TABLE IF EXISTS todoData;

CREATE TABLE todoData (
    id SERIAL PRIMARY KEY, 
    todo TEXT NOT NULL,
    completed BOOLEAN DEFAULT false, 
    created_at TIMESTAMP DEFAULT NOW()
);