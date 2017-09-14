package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuYolcuService;
import com.eryaz.okusis.domain.OkuYolcu;
import com.eryaz.okusis.repository.OkuYolcuRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing OkuYolcu.
 */
@Service
@Transactional
public class OkuYolcuServiceImpl implements OkuYolcuService{

    private final Logger log = LoggerFactory.getLogger(OkuYolcuServiceImpl.class);

    private final OkuYolcuRepository okuYolcuRepository;
    public OkuYolcuServiceImpl(OkuYolcuRepository okuYolcuRepository) {
        this.okuYolcuRepository = okuYolcuRepository;
    }

    /**
     * Save a okuYolcu.
     *
     * @param okuYolcu the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuYolcu save(OkuYolcu okuYolcu) {
        log.debug("Request to save OkuYolcu : {}", okuYolcu);
        return okuYolcuRepository.save(okuYolcu);
    }

    /**
     *  Get all the okuYolcus.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<OkuYolcu> findAll() {
        log.debug("Request to get all OkuYolcus");
        return okuYolcuRepository.findAll(new Sort("id"));
    }

    /**
     *  Get one okuYolcu by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuYolcu findOne(Long id) {
        log.debug("Request to get OkuYolcu : {}", id);
        return okuYolcuRepository.findOne(id);
    }

    /**
     *  Delete the  okuYolcu by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuYolcu : {}", id);
        okuYolcuRepository.delete(id);
    }
}
