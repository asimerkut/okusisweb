package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuSofor;
import java.util.List;

/**
 * Service Interface for managing OkuSofor.
 */
public interface OkuSoforService {

    /**
     * Save a okuSofor.
     *
     * @param okuSofor the entity to save
     * @return the persisted entity
     */
    OkuSofor save(OkuSofor okuSofor);

    /**
     *  Get all the okuSofors.
     *
     *  @return the list of entities
     */
    List<OkuSofor> findAll();

    /**
     *  Get the "id" okuSofor.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuSofor findOne(Long id);

    /**
     *  Delete the "id" okuSofor.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
