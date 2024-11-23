import React, { useEffect, useState } from 'react';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { addTranslationSourcePrefix } from 'app/shared/reducers/locale';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const EntitiesMenu = () => {
  const lastChange = useAppSelector(state => state.locale.lastChange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addTranslationSourcePrefix('services/microservice/'));
  }, [lastChange]);

  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/microservice/department">
        Department
      </MenuItem>
      <MenuItem icon="asterisk" to="/microservice/employee">
        Employee
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
