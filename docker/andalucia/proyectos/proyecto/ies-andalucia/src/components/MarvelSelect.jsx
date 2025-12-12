import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const heroesMarvel = [
  'Iron Man',
  'Captain America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawkeye',
  'Spider-Man',
  'Black Panther',
  'Doctor Strange',
  'Captain Marvel',
];

function MarvelSelect() {
  const [hero, setHero] = useState(null);

  return (
    <Box sx={{ mb: 3 }}>
      <Autocomplete
        options={heroesMarvel}
        value={hero}
        onChange={(event, newValue) => setHero(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Héroes de Marvel"
            variant="outlined"
          />
        )}
      />
      {hero && (
        <p className="mt-2">
          Has seleccionado: <strong>{hero}</strong>
        </p>
      )}
    </Box>
  );
}

export default MarvelSelect;
