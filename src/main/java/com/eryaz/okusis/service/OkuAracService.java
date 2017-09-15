package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuArac;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

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
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<OkuArac> findAll(Pageable pageable);

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
