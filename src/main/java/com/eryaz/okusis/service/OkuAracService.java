package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuArac;
import java.util.List;

/**
 * Service Interface for managing OkuArac.
 */
public interface OkuAracService {

    /**
     * Save a okuArac.
     *
     * @param okuArac the entity to save
     * @return the persisted entity
     */
    OkuArac save(OkuArac okuArac);

    /**
     *  Get all the okuAracs.
     *
     *  @return the list of entities
     */
    List<OkuArac> findAll();

    /**
     *  Get the "id" okuArac.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuArac findOne(Long id);

    /**
     *  Delete the "id" okuArac.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
