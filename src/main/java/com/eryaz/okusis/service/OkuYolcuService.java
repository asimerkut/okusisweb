package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuYolcu;
import java.util.List;

/**
 * Service Interface for managing OkuYolcu.
 */
public interface OkuYolcuService {

    /**
     * Save a okuYolcu.
     *
     * @param okuYolcu the entity to save
     * @return the persisted entity
     */
    OkuYolcu save(OkuYolcu okuYolcu);

    /**
     *  Get all the okuYolcus.
     *
     *  @return the list of entities
     */
    List<OkuYolcu> findAll();

    /**
     *  Get the "id" okuYolcu.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuYolcu findOne(Long id);

    /**
     *  Delete the "id" okuYolcu.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
