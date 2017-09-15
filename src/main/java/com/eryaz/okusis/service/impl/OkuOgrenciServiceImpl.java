package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuOgrenciService;
import com.eryaz.okusis.domain.OkuOgrenci;
import com.eryaz.okusis.repository.OkuOgrenciRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing OkuOgrenci.
 */
@Service
@Transactional
public class OkuOgrenciServiceImpl implements OkuOgrenciService{

    private final Logger log = LoggerFactory.getLogger(OkuOgrenciServiceImpl.class);

    private final OkuOgrenciRepository okuOgrenciRepository;
    public OkuOgrenciServiceImpl(OkuOgrenciRepository okuOgrenciRepository) {
        this.okuOgrenciRepository = okuOgrenciRepository;
    }

    /**
     * Save a okuOgrenci.
     *
     * @param okuOgrenci the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuOgrenci save(OkuOgrenci okuOgrenci) {
        log.debug("Request to save OkuOgrenci : {}", okuOgrenci);
        return okuOgrenciRepository.save(okuOgrenci);
    }

    /**
     *  Get all the okuOgrencis.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<OkuOgrenci> findAll(Pageable pageable) {
        log.debug("Request to get all OkuOgrencis");
        return okuOgrenciRepository.findAll(pageable);
    }

    /**
     *  Get one okuOgrenci by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuOgrenci findOne(Long id) {
        log.debug("Request to get OkuOgrenci : {}", id);
        return okuOgrenciRepository.findOne(id);
    }

    /**
     *  Delete the  okuOgrenci by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuOgrenci : {}", id);
        okuOgrenciRepository.delete(id);
    }
}
