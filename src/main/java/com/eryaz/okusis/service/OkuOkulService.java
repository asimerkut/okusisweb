package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuOkul;
import java.util.List;

/**
 * Service Interface for managing OkuOkul.
 */
public interface OkuOkulService {

    /**
     * Save a okuOkul.
     *
     * @param okuOkul the entity to save
     * @return the persisted entity
     */
    OkuOkul save(OkuOkul okuOkul);

    /**
     *  Get all the okuOkuls.
     *
     *  @return the list of entities
     */
    List<OkuOkul> findAll();

    /**
     *  Get the "id" okuOkul.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuOkul findOne(Long id);

    /**
     *  Delete the "id" okuOkul.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
